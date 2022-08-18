import { PrintfulClient } from "printful-request";

export const printful = new PrintfulClient(process.env.REACT_APP_PRINTFUL_API_KEY);
