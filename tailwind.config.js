/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "mine-shaft": "#232323",
                "dusty-gray": "#9A9A9A",
                "alto": "#D9D9D9",
                "dodger-blue": "#4B68FF",
                "alabaster": "#F9F9F9",
                "malibu": "#6EC8F7",
                "jaffa": "#ED6C3C",
            },
            fontFamily: {
                'inter-black': ['Inter-Black', 'sans-serif'],
                'inter-bold': ['Inter-Bold', 'sans-serif'],
                'inter-extraBold': ['Inter-ExtraBold', 'sans-serif'],
                'inter-semiBold': ['Inter-SemiBold', 'sans-serif'],
                'inter-medium': ['Inter-Medium', 'sans-serif'],
                'inter-regular': ['Inter-Regular', 'sans-serif'],
                'inter-light': ['Inter-Light', 'sans-serif'],
                'inter-extraLight': ['Inter-ExtraLight', 'sans-serif'],
                'inter-thin': ['Inter-Thin', 'sans-serif'],
            },
            boxShadow: {
                'custom-light': '0px 4px 12px rgba(0, 0, 0, 0.03)',
            },
        },
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.auth-heading': {
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '42px',
                    lineHeight: '130%',
                    textAlign: 'center',
                    letterSpacing: '-0.03em',
                    color: '#232323',
                },
            });
        },
    ],
}

