import toast from "react-hot-toast";

const errorHandler = (error: any) => {
  if (error.response) {
    // NestJS/backend error
    const message = error.response.data?.message || "Server error";
    toast.error(Array.isArray(message) ? message[0] : message);
  } else if (error.request) {
    // Request made, no response
    toast.error("No response from server.");
  } else {
    // Axios setup issue or client-side failure
    toast.error("Request error: " + error.message);
  }
};

export default errorHandler;
