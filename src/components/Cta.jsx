import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';

export default function Cta({ blok }) {
	const href = blok.link?.cached_url ? `/${blok.link.cached_url}` : '#';

	return     <div className="feature" {...storyblokEditable(blok)}>
            <Link href={href}>{blok.label}</Link>
		</div>
}
