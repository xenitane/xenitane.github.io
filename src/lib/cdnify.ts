export default function (asset: string): string {
    return `${import.meta.env.CDN_URL}${asset}`;
}
