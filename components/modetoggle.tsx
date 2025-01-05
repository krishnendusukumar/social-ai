'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react'; // Import icons from lucide-react

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="secondary"
            className="p-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
            ) : (
                <Moon size={20} className="text-blue-500" />
            )}
        </Button>
    );
}
