interface IAddresess {
    name: string;
    email: string;
}
export interface IMessage {
    to: IAddresess;
    body: string;
    from: IAddresess;
    subject: string;
}
export interface IMailPRovider {
    sendMail(message: IMessage): Promise<void>;
}