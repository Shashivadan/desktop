import { PubSub } from "./pubSubManger";

setInterval(() => {
  PubSub.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)

