import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastService = {
  success: (message: string) => {
    toast.success(message);
  },
  error: (message: string) => {
    toast.error(message);
  },
  warning: (message: string) => {
    toast.warning(message);
  },
};
