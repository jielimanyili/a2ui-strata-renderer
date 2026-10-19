import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

// Minimal dependency-free server: serves the built app (dist/) plus a live
// A2UI/SSE endpoint. Run `npm run build && npm start`, then open :3001.
// `npm run dev` (Vite) proxies `/a2ui/*` here so Live mode works in dev too.

const DIST = fileURLToPath(new URL("./dist", import.meta.url));
const EVENTS_PATH = fileURLToPath(new URL("./src/a2ui/events.json", import.meta.url));
const PORT = process.env.PORT || 3001;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

const now = () => new Date().toISOString();

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

  // Live A2UI stream — replays the shared event payload over SSE.
  if (url.pathname === "/a2ui/stream") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(": connected\n\n");

    const events = JSON.parse(await readFile(EVENTS_PATH, "utf8"));
    let i = 0;
    const timer = setInterval(() => {
      if (i >= events.length) {
        clearInterval(timer);
        res.write("event: done\ndata: {}\n\n");
        res.end();
        return;
      }
      res.write(`data: ${JSON.stringify({ ...events[i++], timestamp: now() })}\n\n`);
    }, 500);

    req.on("close", () => clearInterval(timer));
    return;
  }

  // Static files (SPA fallback to index.html).
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = normalize(join(DIST, pathname));
  if (!filePath.startsWith(DIST)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[extname(filePath)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    try {
      const index = await readFile(join(DIST, "index.html"));
      res.writeHead(200, { "Content-Type": MIME[".html"] });
      res.end(index);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`a2ui-strata-renderer: http://localhost:${PORT}`);
});
