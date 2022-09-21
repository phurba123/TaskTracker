//import task interface to use it with mock task data
import { Task } from "./task_interface"

// export array of mock tasks so that it can be used at other components for display

export const Tasks : Task[] = [
    {
        id: 1,
        text: 'Angular Completion',
        day: 'june 4th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Event at school',
        day: 'aug 2nd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Shopping',
        day: 'jan 7th at 12:30pm',
        reminder: false,
      },
]