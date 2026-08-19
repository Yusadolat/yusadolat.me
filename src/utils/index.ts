const actualPage = (pathname: string = ''): string => {
    if (!pathname) return '';
    
    while(pathname[pathname.length - 1] === '/') {
        pathname = pathname.slice(0, pathname.length - 1);
    }   
    // Navbar compares against labels like 'Tech Talks', so a slug such as
    // 'tech-talks' has to become spaced words, not 'Tech-Talks'.
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1).replace(/-/g, ' ')
    const title = slug.replace(/\b\w/g, l => l.toUpperCase())
    return title
}

const isPostOrProject = (actualPage: string): boolean => {	
	switch(actualPage) {
		case '':
		case 'Blog':
		case 'Contact':
		case 'Portfolio':
		case 'About':
			return false
		default:
			return true
	}	
}

export {
  actualPage,
  isPostOrProject
}
