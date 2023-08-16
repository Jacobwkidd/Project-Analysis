const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Role = require('../models/Role');

const router = express.Router();

router.get('/', async (req, res) => {
    const TOT_NUM_USERS = 10;
    
    try {
				// Will only seed the database if there are less users than we expect.                
        if((await User.findAll()).length < TOT_NUM_USERS){
					/*
		        TODO: Write your seed logic here. Note that you will likely
						want to make some helper functions in here to break up the task
						into some smaller parts.

						Seeding the database involves creating data for our Role and User
						models. In our case, there will only be two Roles: Manager and Employee.
						We will be using 10 User models (as we can see from our TOT_NUM_USERS constant).
						
						In our application, the Role model is completely independent of the User model, however,
						the User model requires a Role. Therefore, you should first create the Roles needed
						and then create the Users needed, associating each user with a Role in the proper way.
						The "proper way" being that the roleId property on the User has the primary key of the Role
						in which that User has. When you create your database, take a look at the tables created
						and you should see a foreign key of roleId on the Users table.
					*/




                            const emailAddresses = [
                                'manager_a@example.com',
                                'manager_b@domain.com',

                                'susanroberts@website.net',
                                'johndoe@myweb.com',
                                'janedoe@example.net',
                                'bobsmith@domain.net',
                                'emmajohnson@webplace.com',
                                'oliviasmith@site.com',
                                'jamesbrown@web.com',
                                'marywilliams@website.net'
                            ];


                            //Create Roles
                            const adminRole = await Role.create({title: "Manager"}); // 1
                            const userRole = await Role.create({title: "Employee"}); // 2      have to change the password to bcrypt.hash all the password
                            //Create Users
                            const user1 = await User.create({username: "JohnSmith", password: (await bcrypt.hash("123", 10)), isEmployed: true, RoleId: adminRole.id, Email: emailAddresses[0]});
                            const user2 = await User.create({username: "BillyBob", password: (await bcrypt.hash("321", 10)), isEmployed: false, RoleId: adminRole.id, Email: emailAddresses[1]});
                            const user3 = await User.create({username: "SillySally", password: (await bcrypt.hash("1234", 10)), isEmployed: true, RoleId: userRole.id, Email: emailAddresses[2]});
                            const user4 = await User.create({username: "SillySally1", password: (await bcrypt.hash("1234", 10)), isEmployed: true, RoleId: userRole.id, Email: emailAddresses[3]});
                            const user5 = await User.create({username: "SillySally2", password: (await bcrypt.hash("12345", 10)), isEmployed: false, RoleId: userRole.id, Email: emailAddresses[4]});
                            const user6 = await User.create({username: "SillySally3", password: (await bcrypt.hash("123456", 10)), isEmployed: true, RoleId: userRole.id, Email: emailAddresses[5]});
                            const user7 = await User.create({username: "SillySally4", password: (await bcrypt.hash("1234567", 10)), isEmployed: false, RoleId: userRole.id, Email: emailAddresses[6]});
                            const user8 = await User.create({username: "SillySally5", password: (await bcrypt.hash("12345678", 10)), isEmployed: false, RoleId: userRole.id, Email: emailAddresses[7]});
                            const user9 = await User.create({username: "SillySally6", password: (await bcrypt.hash("123456789", 10)), isEmployed: false, RoleId: userRole.id, Email: emailAddresses[8]});
                            const user10 = await User.create({username: "SillySally7", password: (await bcrypt.hash("12345678910", 10)), isEmployed: true, RoleId: userRole.id, Email: emailAddresses[9]});
                            

                            /*
                            Pro-tip: Notice that the manager emails actually have the word "manager"
                            in them? This will help you when testing your app to immediately
                            know which users have a role of manager without having to go and
                            check the database.
                            
                            It's a small thing, but, trust me, it will save you from a lot of 
                            annoyance during testing.
                            */
                         
                            
		        res.status(200).send('Database seeded successfully');
        } else {
            res.status(200).send('Database already seeded successfully');
        }

    } catch(error) {
        console.error('Error seeding database:', error);
        res.status(500).send('Error seeding database');
    }
});

module.exports = router;