/**
 * Loader Component
 *
 * Props:
 * - size
 */

type LoaderProps = {
  size?: number;
};

export default function Loader({
  size = 40,
}: LoaderProps) {
  return (
    <div
      className="animate-spin rounded-full border-4 border-gray-300 border-t-green-700"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}