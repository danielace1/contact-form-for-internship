import { cleanEnv, str, email } from "envalid";

export default cleanEnv(process.env, {
  EMAIL_USER: email(),
  EMAIL_PASS: str(),
  RECEIVER_EMAIL: email(),
});
