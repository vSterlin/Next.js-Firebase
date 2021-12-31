import { App, initializeApp, getApp, getApps } from "firebase-admin/app";
import { credential } from "firebase-admin";

const initFirebaseAdmin = (): App => {
  if (!getApps().length) {
    return initializeApp({
      credential: credential.cert("./service-account-key.json"),
    });
  } else {
    return getApp();
  }
};

const adminApp = initFirebaseAdmin();

export { adminApp };
