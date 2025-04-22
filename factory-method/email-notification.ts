import { NotificationInterface } from "./notification-interface";

class EmailNotification implements NotificationInterface {
  submit(): void {
    console.log("Sending notifiaction by email");
  }
}

class SMSNotification implements NotificationInterface {
  submit(): void {
    console.log("Sending notifiaction by SMS");
  }
}

class PushNotification implements NotificationInterface {
  submit(): void {
    console.log("Sending notifiaction by push");
  }
}

class NotificationFactory {
  static createNotification(type: string): NotificationInterface {
    if (type === "email") {
      return new EmailNotification();
    } else if (type === "sms") {
      return new SMSNotification();
    } else if (type === "push") {
      return new PushNotification();
    }
    throw new Error("Invalid notification type");
  }
}

const emailNotification = NotificationFactory.createNotification("email");
emailNotification.submit();

const smsNotification = NotificationFactory.createNotification("sms");
smsNotification.submit();

const pushNotification = NotificationFactory.createNotification("push");
pushNotification.submit();
