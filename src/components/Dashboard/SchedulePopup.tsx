import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface SchedulePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulePopup: React.FC<SchedulePopupProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('09:00');
  const [timezone, setTimezone] = useState<string>('EST');

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const timezones = [
    'EST (Eastern Standard Time)',
    'PST (Pacific Standard Time)', 
    'CST (Central Standard Time)',
    'MST (Mountain Standard Time)',
    'UTC (Coordinated Universal Time)'
  ];

  const upcomingCampaigns = [
    { name: 'Black Friday Sale', date: '2024-11-29', time: '09:00', status: 'scheduled' },
    { name: 'Holiday Newsletter', date: '2024-12-15', time: '14:00', status: 'scheduled' },
    { name: 'New Year Promotion', date: '2025-01-02', time: '10:00', status: 'draft' }
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      // Here you would typically save the scheduled campaign
      console.log('Scheduling campaign for:', selectedDate, selectedTime, timezone);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Schedule Campaign
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="space-y-4">
            <Card className="p-4">
              <h4 className="font-medium mb-4">Select Date</h4>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border shadow pointer-events-auto"
              />
            </Card>

            {/* Time Selection */}
            <Card className="p-4">
              <h4 className="font-medium mb-4">Select Time</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="time-select">Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timezone-select">Timezone</Label>
                  <Select value={timezone} onValueChange={(value) => setTimezone(value.split(' ')[0])}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Schedule Summary & Upcoming Campaigns */}
          <div className="space-y-4">
            {/* Schedule Summary */}
            <Card className="p-4">
              <h4 className="font-medium mb-4">Schedule Summary</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">
                      {selectedDate ? format(selectedDate, 'PPP') : 'No date selected'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedTime} {timezone}
                    </p>
                  </div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">Optimal Send Time</p>
                  <p className="text-xs text-muted-foreground">
                    Based on your audience, Tuesday-Thursday 9-11 AM typically get the best results
                  </p>
                </div>
              </div>
            </Card>

            {/* Upcoming Campaigns */}
            <Card className="p-4">
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Upcoming Campaigns
              </h4>
              <div className="space-y-3">
                {upcomingCampaigns.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{campaign.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {campaign.date} at {campaign.time}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      campaign.status === 'scheduled' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-warning/10 text-warning'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary-gradient" 
            onClick={handleSchedule}
            disabled={!selectedDate}
          >
            Schedule Campaign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulePopup;