import { createClient, RedisClientType } from "redis";


export class PubSub {
  private static Instance: PubSub

  private redisClient: RedisClientType
  private subscriebtion: Map<string, string[]>
  private constructor() {
    this.redisClient = createClient()
    this.redisClient.connect()
    this.subscriebtion = new Map()
  }

  public static getInstance(): PubSub {
    if (!PubSub.Instance) {
      PubSub.Instance = new PubSub()
    }
    return PubSub.Instance
  }


  public userSubscribe(stock: string, userId: string) {
    if (!this.subscriebtion.has(stock)) {
      this.subscriebtion.set(stock, [])
    }
    this.subscriebtion.get(stock)?.push(userId)

    if (this.subscriebtion.get(stock)?.length === 1) {
      this.redisClient.subscribe(stock, (message: any) => {
        this.redisClient.subscribe(stock, message)

      })
      console.log(`Subscribed to Redis channel: ${stock}`);
    }
  }

  public userUnsubscribe(userId: string, stock: string) {
    this.subscriebtion.set(stock, this.subscriebtion.get(stock)?.filter((sub) => sub !== userId) || []);
    if (this.subscriebtion.get(stock)?.length === 0) {
      this.redisClient.unsubscribe(stock)
      console.log(`UnSubscribed to Redis channel: ${stock}`);

    }

  }
  private handldMessages(stock: string, messages: string) {
    this.subscriebtion.get(stock)?.map((sub: string) => {
      console.log(`the message is ${messages} , ${sub}`);
    })
  }
}
