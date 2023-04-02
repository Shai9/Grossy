import  {createClient}  from "@sanity/client";
import  ImageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: "t6oolyxc",
  dataset: 'production',
  apiVersion: "2023-04-03",
  useCdn: true,
  token: "skF842onRHnfNOcF5EqjrakUh4RZT1785BLmIXV0laC7jkGUE74AsDp6m7jK3DF0htVdz8T6AXR6tNwGXep7At283rtfEoBRxSAGV9L9hjUB4GVIay8qHlDK3Om0LPsAVLow4QNBtZOh6pveHmbeloX7rc2Lq0H2STf9kXyEJJ5Gp3tTlUVF"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export default client;