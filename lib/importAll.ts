export async function importAll<T = unknown>(
  context: __WebpackModuleApi.RequireContext
): Promise<T[]> {
  return context.keys().map((fileName) => context(fileName).default)
}
