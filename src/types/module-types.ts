declare module 'tailwind.macro' {
  export default function tw(string: TemplateStringsArray): Record<string, string>
}