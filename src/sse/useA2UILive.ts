import { useCallback, useEffect, useRef, useState } from "react";
import type { A2UIStreamEvent } from "../a2ui/types";

/**
 * Opens an EventSource to `/a2ui/stream` (served by `server.mjs`) and forwards
 * parsed A2UI stream events to `onEvent`. Uses a ref so callback identity never
 * forces a reconnect.
 */
export function useA2UILive(onEvent: (event: A2UIStreamEvent) => void) {
  const [connected, setConnected] = useState(false);
  const esRef = useRef<EventSource | null>(null);
  const onEventRef = useRef(onEvent);
  onEventRef.current = onEvent;

  const connect = useCallback(() => {
    esRef.current?.close();
    const es = new EventSource("/a2ui/stream");
    es.onopen = () => setConnected(true);
    es.onmessage = (msg) => {
      try {
        onEventRef.current(JSON.parse(msg.data) as A2UIStreamEvent);
      } catch {
        // Ignore non-JSON keepalive/comment frames.
      }
    };
    es.onerror = () => setConnected(false);
    esRef.current = es;
  }, []);

  const disconnect = useCallback(() => {
    esRef.current?.close();
    esRef.current = null;
    setConnected(false);
  }, []);

  useEffect(() => () => esRef.current?.close(), []);

  return { connected, connect, disconnect };
}
