/**
 * Input Component
 *
 * Props:
 * - label
 * - placeholder
 * - type
 * - error
 */

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  error,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-green-600"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}