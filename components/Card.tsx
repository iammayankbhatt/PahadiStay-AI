import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
}

export default function Card({
  title,
  description,
  image,
  buttonText,
}: CardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-stone-200 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">
          {title}
        </h3>

        <p className="mb-4 text-gray-600">
          {description}
        </p>

        {buttonText && (
          <button className="rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}