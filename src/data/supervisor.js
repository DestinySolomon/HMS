export const supervisorTasks = [

    {
        id:"TASK-001",
        task:"Inspect Room 204",
        department:"Housekeeping",
        assignedTo:"Sarah Williams",
        status:"Completed"
    },


    {
        id:"TASK-002",
        task:"Check Room 305 Maintenance",
        department:"Maintenance",
        assignedTo:"Michael Stone",
        status:"Pending"
    },


    {
        id:"TASK-003",
        task:"Verify Restaurant Cleanliness",
        department:"Restaurant",
        assignedTo:"John Anderson",
        status:"In Progress"
    }

];



export const roomStatusSummary = [

    {
        status:"Ready",
        count:85
    },


    {
        status:"Occupied",
        count:96
    },


    {
        status:"Cleaning",
        count:12
    },


    {
        status:"Maintenance",
        count:5
    }

];



export const supervisorAlerts = [

    {
        title:"Low Laundry Stock",
        level:"Warning"
    },


    {
        title:"Room 305 requires maintenance",
        level:"Critical"
    },


    {
        title:"Restaurant inspection due",
        level:"Pending"
    }

];