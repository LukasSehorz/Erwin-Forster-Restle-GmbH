export function Feld({
  label,
  name,
  type = "text",
  fehler,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  fehler?: string | undefined;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={fehler ? true : undefined}
        aria-describedby={fehler ? `${name}-fehler` : undefined}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-lg"
      />
      {fehler ? (
        <p id={`${name}-fehler`} className="mt-1 text-[17px] text-primary">
          {fehler}
        </p>
      ) : null}
    </div>
  );
}
