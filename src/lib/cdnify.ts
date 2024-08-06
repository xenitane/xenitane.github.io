export default function (asset: [boolean, string]): string {
    return asset[0] ? `${import.meta.env.CDN_URL}${asset[1]}` : asset[1];
}
