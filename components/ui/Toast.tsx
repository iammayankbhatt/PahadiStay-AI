/**
 * Toast Component
 *
 * Props:
 * - message
 * - type
 */

type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning";
};

export default function Toast({
  message,
  type = "success",
}: ToastProps) {
  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`rounded-lg px-4 py-3 text-white shadow-lg ${colors[type]}`}
    >
      {message}
    </div>
  );
}