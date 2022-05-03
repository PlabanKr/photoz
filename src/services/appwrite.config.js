import { Appwrite } from "appwrite";

const sdk = new Appwrite();
sdk.setEndpoint("https://localhost/v1").setProject("626edf1f18ab237aa815");

export const account = sdk.account;
export const database = sdk.database;
