import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;
wss.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.on("message", (data: any) => {
    const message = JSON.parse(data);
    if (message.type === "sender") {
      console.log("sender");

      senderSocket = ws;
    } else if (message.type === "receiver") {
      receiverSocket = ws;
      console.log("receiver");
    } else if (message.type === "createOffer") {
      if (ws !== senderSocket) return;
      console.log("createOffer");
      
      receiverSocket?.send(
        JSON.stringify({ type: "createOffer", sdp: message.sdp })
      );
    } else if (message.type === "createAnswer") {
      if (ws !== senderSocket) return;
      senderSocket.send(
        JSON.stringify({ type: "createAnswer", sdp: message.sdp })
      );
    } else if (message.type === "iceCandidate") {
      if (ws === senderSocket) {
        receiverSocket?.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: message.candidate,
          })
        );
      } else if (ws === receiverSocket) {
        senderSocket?.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: message.candidate,
          })
        );
      }
    }
  });
  console.log("suessus");

  ws.send("somethings");
});
