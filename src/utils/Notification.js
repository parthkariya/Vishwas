import { notification } from "antd";

const createNotification = (type, message, description, duration = 2) => {
  notification[type]({
    message,
    description,
    duration, // Set the duration here (default is 2 seconds)
  });
};

export default createNotification;
