import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, X } from 'lucide-react';

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              <DialogTitle>Marketing Calendar</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border pointer-events-auto"
          />
          
          {selectedDate && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Selected Date</h4>
              <p className="text-sm text-muted-foreground">
                {format(selectedDate, 'PPPP')}
              </p>
              <div className="mt-3 space-y-1">
                <p className="text-xs text-muted-foreground">• No campaigns scheduled</p>
                <p className="text-xs text-muted-foreground">• Available for new campaigns</p>
              </div>
            </div>
          )}
          
          <div className="flex gap-2 pt-4">
            <Button variant="primary-gradient" className="flex-1">
              Schedule Campaign
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarPopup;