declare module "aos" {
  interface AOSOptions {
    duration?: number;
    once?: boolean;
    offset?: number;
    easing?: string;
    delay?: number;
  }

  interface AOS {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}
