import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export function LegalModal({ isOpen, onClose, content }: LegalModalProps) {
  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentKey = 0;

    for (const line of lines) {
      const key = currentKey++;
      
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key} className="text-2xl text-slate-900 mb-4 mt-6 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key} className="text-xl text-slate-800 mb-3 mt-5">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key} className="text-lg text-slate-700 mb-2 mt-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={key} className="text-slate-900 mb-2">
            <strong>{line.replace(/\*\*/g, '')}</strong>
          </p>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={key} className="text-slate-600 mb-1 ml-4">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={key} className="mb-2" />);
      } else if (line.trim()) {
        // Handle links in content
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let processedLine = line;
        const links: { text: string; url: string; placeholder: string }[] = [];
        let match;
        
        while ((match = linkRegex.exec(line)) !== null) {
          const placeholder = `__LINK_${links.length}__`;
          links.push({ text: match[1], url: match[2], placeholder });
          processedLine = processedLine.replace(match[0], placeholder);
        }
        
        const parts = processedLine.split(/(__LINK_\d+__)/);
        const renderedLine = parts.map((part, index) => {
          const linkMatch = links.find(link => link.placeholder === part);
          if (linkMatch) {
            return (
              <a 
                key={index} 
                href={linkMatch.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline"
              >
                {linkMatch.text}
              </a>
            );
          }
          return part;
        });
        
        elements.push(
          <p key={key} className="text-slate-600 mb-2 leading-relaxed">
            {renderedLine}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-slate-900">
              Información Legal
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
        </DialogHeader>
        
        <ScrollArea className="px-6 pb-6 max-h-[calc(80vh-120px)]">
          <div className="prose prose-slate max-w-none">
            {renderContent(content)}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}