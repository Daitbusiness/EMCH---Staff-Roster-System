        // Staff data with initial list and credentials
        let staffList = [
            { 
                name: 'Test Administrator', 
                username: 'ilovenz@outlook.co.nz', 
                password: '123456', 
                role: 'manager', 
                contact: 'ilovenz@outlook.co.nz', 
                startDate: '2023-01-01',
                uid: 'PpsniXFJqYXeYE1txnu049rH54t1'
            },
            { name: 'Daniel', username: 'daniel', password: '123456', role: 'staff', contact: 'daniel@carehome.com', startDate: '2024-03-15' },
            { name: 'Shami', username: 'shami', password: '234567', role: 'staff', contact: 'shami@carehome.com', startDate: '2023-11-20' },
            { name: 'Vaneeta', username: 'vaneeta', password: '345678', role: 'staff', contact: 'vaneeta@carehome.com', startDate: '2024-02-05' },
            { name: 'Priyashna', username: 'priyashna', password: '456789', role: 'staff', contact: 'priyashna@carehome.com', startDate: '2024-01-10' },
            { name: 'Pranita', username: 'pranita', password: '567890', role: 'staff', contact: 'pranita@carehome.com', startDate: '2024-04-12' },
            { name: 'Mandy', username: 'mandy', password: '678901', role: 'staff', contact: 'mandy@carehome.com', startDate: '2024-01-10' },
            { name: 'Nagham', username: 'nagham', password: '789012', role: 'staff', contact: 'nagham@carehome.com', startDate: '2024-02-22' },
            { name: 'Admin', username: 'admin', password: 'admin123', role: 'manager', contact: 'admin@carehome.com', startDate: '2023-01-01' },
            { name: 'Manager', username: 'manager', password: 'manager123', role: 'manager', contact: 'manager@carehome.com', startDate: '2023-03-15' }
        ];
        
        // Roster data with initial values
        const allWeeks = [
            {
                weekName: "Week 1: May 31 - Jun 6",
                startDate: "2025-05-31",
                ph: 2, // Monday PH
                data: [
                    { role: "", hours: "10-3.30pm", sat: "", sun: "", mon: "Daniel", tue: "Daniel", wed: "Daniel", thu: "Daniel", fri: "Daniel", marker: "" },
                    { role: "SCG", hours: "8am – 1pm", sat: "Shami", sun: "Vaneeta", mon: "Priyashna", tue: "", wed: "", thu: "Pranita", fri: "", marker: "" },
                    { role: "HCA 1", hours: "7am - 3pm", sat: "Mandy", sun: "Nagham", mon: "Daniel", tue: "Amy", wed: "Mandy", thu: "Safrin", fri: "Manesha", marker: "W" },
                    { role: "HCA 2", hours: "7am - 2pm", sat: "Sharon", sun: "Safrin", mon: "Nisha", tue: "Manesha", wed: "Rukshana", thu: "Manesha", fri: "Sindhu", marker: "W" },
                    { role: "HCA 3", hours: "7am - 2pm", sat: "Nagham", sun: "Nisha", mon: "Amy", tue: "Bhumi", wed: "Amy", thu: "Karishma", fri: "Bhumi", marker: "B" },
                    { role: "HCA 5", hours: "7am – 3pm", sat: "Sindhu", sun: "Harjinder", mon: "Peau", tue: "Karishma", wed: "Haginder", thu: "Nisha", fri: "Rukshana", marker: "G" },
                    { role: "HCA 6", hours: "8am-12MD", sat: "Karishma", sun: "Manesha", mon: "Karishma", tue: "Pranita", wed: "Manesha", thu: "Hazel", fri: "Peau", marker: "F" },
                    { role: "HCA 7", hours: "7am– 3pm", sat: "Nisha", sun: "Shami", mon: "Shami", tue: "Shami", wed: "Nisha", thu: "Priyashna", fri: "Lailyn", marker: "Y" },
                    { role: "HCA 8", hours: "7am– 3pm", sat: "Jurivih", sun: "Jurivih", mon: "Christel", tue: "Queenie", wed: "Christel", thu: "Shami", fri: "Jackie", marker: "Y" },
                    { role: "SCG", hours: "4.45-8.15", sat: "Shami", sun: "Vaneeta", mon: "Priyashna", tue: "Pranita", wed: "Priyashna", thu: "Pranita", fri: "Amy", marker: "F" },
                    { role: "HCA 1", hours: "3pm–11pm", sat: "Jackie", sun: "Jackie", mon: "Vaneeta", tue: "Jackie", wed: "Jackie", thu: "Vaneeta", fri: "Vaneeta", marker: "Y" },
                    { role: "HCA 2", hours: "3pm– 9pm", sat: "Hazel", sun: "Daniel", mon: "Mary", tue: "Neha", wed: "Sharon", thu: "Hazel", fri: "Jurivih", marker: "Y" },
                    { role: "HCA 3", hours: "3pm – 11pm", sat: "Safrin", sun: "Mandy", mon: "Sindhu", tue: "Vaneeta", wed: "Peau", thu: "Mandy", fri: "Safrin", marker: "W" },
                    { role: "HCA 4", hours: "4.30pm– 8.30pm", sat: "Karishma", sun: "Pranita", mon: "Lailyn", tue: "Peau", wed: "Daniel", thu: "Sharon", fri: "Peau", marker: "W" },
                    { role: "HCA 5", hours: "3pm –11pm", sat: "Peau", sun: "Sindhu", mon: "Harjinder", tue: "Sindhu", wed: "Pranita", thu: "Ambily", fri: "Amy", marker: "B" },
                    { role: "HCA 6", hours: "3pm – 11pm", sat: "Amy", sun: "Pisila", mon: "Pranita", tue: "Harjinder", wed: "Mary", thu: "Harjinder", fri: "Salote", marker: "G" },
                    { role: "HCA 8", hours: "4.45-8.15pm", sat: "", sun: "", mon: "", tue: "", wed: "", thu: "Ambily", fri: "", marker: "F" },
                    { role: "HCA 1", hours: "11pm –7am", sat: "Ester", sun: "Ester", mon: "Ester", tue: "Pisila", wed: "Pisila", thu: "Ester", fri: "Ester", marker: "Y" },
                    { role: "HCA 2", hours: "11pm – 7am", sat: "Christel", sun: "Ambily", mon: "Pisila", tue: "Salote", wed: "Queenie", thu: "Pisila", fri: "Mary", marker: "N" },
                    { role: "HCA 3", hours: "11pm – 7am", sat: "Salote", sun: "Hazel", mon: "Ambily", tue: "Lailyn", wed: "Nagham", thu: "Mary", fri: "Priyashna", marker: "N" },
                    { role: "Planned Leave", hours: "", sat: "Rukshana 21/7-26/7", sun: "Pisila 30/6-11/7", mon: "Nisha 9/9-17/9", tue: "Nisha 10/10-23/10", wed: "Pranita 19/10-23/10", thu: "", fri: "Priyashna Lailyn", marker: "" }
                ]
            },
            {
                weekName: "Week 2: Jun 7 - Jun 13",
                startDate: "2025-06-07",
                ph: null,
                data: [
                    { role: "", hours: "10-3.30pm", sat: "", sun: "", mon: "Daniel", tue: "Daniel", wed: "Daniel", thu: "Daniel", fri: "Daniel", marker: "" },
                    { role: "SCG", hours: "8am – 1pm", sat: "Vaneeta", sun: "Shami", mon: "Pranita", tue: "", wed: "", thu: "Pranita", fri: "", marker: "" },
                    { role: "HCA 1", hours: "7am - 3pm", sat: "Sindhu", sun: "Mandy", mon: "Shami", tue: "Manesha", wed: "Safrin", thu: "Rukshana", fri: "Sindhu", marker: "W" },
                    { role: "HCA 2", hours: "7am - 2pm", sat: "Manesha", sun: "Nagham", mon: "Amy", tue: "Pranita", wed: "Nisha", thu: "Peau", fri: "Manesha", marker: "W" },
                    { role: "HCA 3", hours: "7am - 2pm", sat: "Nisha", sun: "Safrin 7.30", mon: "Bhumi", tue: "Mandy", wed: "Karishma", thu: "Pranita", fri: "Amy", marker: "B" },
                    { role: "HCA 5", hours: "7am – 3pm", sat: "Safrin", sun: "Harjinder", mon: "Nagham", tue: "Amy", wed: "Rukshana", thu: "Amy", fri: "Harjinder", marker: "G" },
                    { role: "HCA 6", hours: "8am-12MD", sat: "Jurivih", sun: "Karishma", mon: "Salote", tue: "Ambily", wed: "Manesha", thu: "Neha", fri: "Salote", marker: "F" },
                    { role: "HCA 7", hours: "7am– 3pm", sat: "Aurion", sun: "Sharon", mon: "Christel", tue: "Priyashna", wed: "Jackie", thu: "Nisha", fri: "Vaneeta", marker: "Y" },
                    { role: "HCA 8", hours: "7am– 3pm", sat: "Shami", sun: "Priyashna", mon: "Nisha", tue: "Shami", wed: "Christel", thu: "Lailyn", fri: "Sharon", marker: "Y" },
                    { role: "SCG", hours: "4.45-8.15", sat: "Vaneeta", sun: "Shami", mon: "Pranita", tue: "Priyashna", wed: "Sindhu", thu: "Harjinder", fri: "Vaneeta", marker: "F" },
                    { role: "HCA 1", hours: "3pm–11pm", sat: "Jackie", sun: "Jackie", mon: "Vaneeta", tue: "Jackie", wed: "Shami", thu: "Vaneeta", fri: "Jackie", marker: "Y" },
                    { role: "HCA 2", hours: "3pm– 9pm", sat: "Hazel", sun: "Jurivih", mon: "Mary", tue: "Hazel", wed: "Lailyn", thu: "Sharon", fri: "Jurivih", marker: "Y" },
                    { role: "HCA 3", hours: "3pm – 11pm", sat: "Peau", sun: "Pranita", mon: "Hazel", tue: "Safrin", wed: "Harjinder", thu: "Christel", fri: "Pranita", marker: "W" },
                    { role: "HCA 4", hours: "4.30pm– 8.30pm", sat: "Daniel", sun: "Karishma", mon: "Daniel", tue: "Peau", wed: "Peau", thu: "Salote", fri: "Daniel", marker: "W" },
                    { role: "HCA 5", hours: "3pm –11pm", sat: "Amy 2-11", sun: "Safrin 3-2/11", mon: "Harjinder", tue: "Sindhu", wed: "Sindhu", thu: "Harjinder", fri: "Pisila", marker: "B" },
                    { role: "HCA 6", hours: "3pm – 11pm", sat: "Mandy", sun: "Sindhu", mon: "Karishma", tue: "Vaneeta", wed: "Ester", thu: "Mandy", fri: "Nisha", marker: "G" },
                    { role: "HCA 8", hours: "4.45-8.15pm", sat: "", sun: "", mon: "", tue: "", wed: "", thu: "Ambily", fri: "Neha", marker: "F" },
                    { role: "HCA 1", hours: "11pm –7am", sat: "Pisila", sun: "Pisila", mon: "Pisila", tue: "Sharon", wed: "Pisila", thu: "Ester", fri: "Ester", marker: "Y" },
                    { role: "HCA 2", hours: "11pm – 7am", sat: "Ester", sun: "Ester", mon: "Lailyn", tue: "Salote", wed: "Mary", thu: "Hazel", fri: "Priyashna", marker: "N" },
                    { role: "HCA 3", hours: "11pm – 7am", sat: "Christel", sun: "Ambily", mon: "Queenie", tue: "Nagham", wed: "Queenie", thu: "Mary", fri: "Ambily", marker: "N" },
                    { role: "Planned Leave", hours: "", sat: "Nisha 9/9-17/9", sun: "Nisha 10/10-23/10", mon: "Pisila 30/6-11/7", tue: "Pranita 19/10-23/10", wed: "Rukshana 21/7-26/7", thu: "13/6-14/6", fri: "", marker: "" }
                ]
            }
        ];
        
        const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
        const dayNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        let currentWeekIdx = 0;
        let currentUser = null;
        let shiftSwapRequests = [];
        
        // Login functionality
        document.getElementById('loginBtn').addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Find user
            const user = staffList.find(u => u.username === username && u.password === password);
            
            if (user) {
                currentUser = user;
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('mainContainer').style.display = 'block';
                document.getElementById('currentUser').textContent = user.name;
                document.getElementById('userRole').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
                
                // Load data and render
                loadLocal();
                renderRoster(currentWeekIdx);
                renderStaffList();
                populateShiftDropdowns();
                renderReports();
                
                // Show notification
                showNotification('Login successful! Welcome back.');
            } else {
                showNotification('Invalid username or password', true);
            }
        });
        
        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function() {
            document.getElementById('mainContainer').style.display = 'none';
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('username').value = 'ilovenz@outlook.co.nz';
            document.getElementById('password').value = '123456';
            currentUser = null;
        });
        
        // Format date as MM/DD
        function formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        }
        
        // Set week dates display
        function setWeekDatesDisplay(weekStart) {
            let dt = new Date(weekStart);
            const dates = [];
            
            for (let i = 0; i < 7; i++) {
                let dayDate = new Date(dt);
                dayDate.setDate(dt.getDate() + i);
                dates.push(formatDate(dayDate));
            }
            
            return dates;
        }
        
        // Render the roster table
        function renderRoster(weekIdx) {
            const week = allWeeks[weekIdx];
            document.getElementById('weekSelector').selectedIndex = weekIdx;
            
            // Set week dates
            const dates = setWeekDatesDisplay(week.startDate);
            
            // Update roster header
            const headerRow = `
                <div>Role</div>
                <div>Hours</div>
                <div>${dayNames[0]} ${dates[0]}</div>
                <div>${dayNames[1]} ${dates[1]}</div>
                <div>${dayNames[2]} ${dates[2]}</div>
                <div>${dayNames[3]} ${dates[3]}</div>
                <div>${dayNames[4]} ${dates[4]}</div>
                <div>${dayNames[5]} ${dates[5]}</div>
                <div>${dayNames[6]} ${dates[6]}</div>
            `;
            document.querySelector('.roster-header').innerHTML = headerRow;
            
            // Render roster body
            const tbody = document.getElementById('rosterBody');
            tbody.innerHTML = '';
            
            week.data.forEach(rowData => {
                const row = document.createElement('div');
                row.className = 'roster-row';
                
                // Role cell
                const roleCell = document.createElement('div');
                roleCell.className = 'role-cell';
                
                if (rowData.marker) {
                    const marker = document.createElement('span');
                    marker.className = 'role-marker';
                    marker.textContent = rowData.marker;
                    marker.style.backgroundColor = getMarkerColor(rowData.marker);
                    roleCell.appendChild(marker);
                }
                
                roleCell.innerHTML += rowData.role;
                
                // Hours cell
                const hoursCell = document.createElement('div');
                hoursCell.className = 'hours-cell';
                hoursCell.textContent = rowData.hours;
                
                row.appendChild(roleCell);
                row.appendChild(hoursCell);
                
                // Day staff cells
                days.forEach((day, idx) => {
                    const dayCell = document.createElement('div');
                    dayCell.className = 'shift-cell';
                    if (week.ph === idx) dayCell.classList.add('ph');
                    
                    dayCell.textContent = rowData[day] || '';
                    dayCell.dataset.role = rowData.role;
                    dayCell.dataset.day = day;
                    dayCell.dataset.week = weekIdx;
                    
                    if (rowData.role !== "Planned Leave") {
                        dayCell.addEventListener('click', function() {
                            editCell(this, weekIdx, rowData.role, day);
                        });
                    }
                    
                    row.appendChild(dayCell);
                });
                
                tbody.appendChild(row);
            });
            
            // Update stats
            updateStats();
        }
        
        // Get color for marker
        function getMarkerColor(marker) {
            const colors = {
                'W': '#4361ee',
                'B': '#3a0ca3',
                'G': '#4cc9f0',
                'F': '#f72585',
                'Y': '#ff9e00',
                'N': '#7209b7'
            };
            return colors[marker] || '#4361ee';
        }
        
        // Edit a cell
        function editCell(cell, weekIdx, role, day) {
            const oldVal = cell.textContent;
            const staffNames = staffList.map(s => s.name);
            
            cell.innerHTML = `
                <select class="staff-select" style="width:100%; border:none; background:transparent; font-weight:500; cursor:pointer;">
                    <option value="">-- Select staff --</option>
                    ${staffNames.map(name => `<option value="${name}" ${name === oldVal ? 'selected' : ''}>${name}</option>`).join('')}
                </select>
            `;
            
            const select = cell.querySelector('select');
            select.focus();
            
            select.addEventListener('change', function() {
                cell.textContent = this.value;
                cell.classList.add('shift-cell');
                
                // Update data model
                const week = allWeeks[weekIdx];
                const row = week.data.find(r => r.role === role);
                if (row) {
                    row[day] = this.value;
                    saveLocal();
                    showNotification('Shift assignment updated');
                }
            });
            
            select.addEventListener('blur', function() {
                if (!this.value) {
                    cell.textContent = oldVal;
                    cell.classList.add('shift-cell');
                }
            });
        }
        
        // Populate shift dropdowns
        function populateShiftDropdowns() {
            const shiftSelect = document.getElementById('shiftSelect');
            const staffSelect = document.getElementById('staffSelect');
            
            // Clear existing options
            shiftSelect.innerHTML = '<option value="">-- Select your shift --</option>';
            staffSelect.innerHTML = '<option value="">-- Select staff member --</option>';
            
            if (!currentUser) return;
            
            // Add shifts for current user
            allWeeks.forEach((week, weekIdx) => {
                week.data.forEach(row => {
                    days.forEach(day => {
                        if (row[day] === currentUser.name) {
                            const shiftDate = new Date(week.startDate);
                            shiftDate.setDate(shiftDate.getDate() + days.indexOf(day));
                            
                            const option = document.createElement('option');
                            option.value = `${weekIdx}_${row.role}_${day}`;
                            option.textContent = `${week.weekName.split(':')[0]} - ${dayNames[days.indexOf(day)]} (${row.role})`;
                            shiftSelect.appendChild(option);
                        }
                    });
                });
            });
            
            // Add staff members (excluding current user and managers)
            staffList.forEach(staff => {
                if (staff.role === 'staff' && staff.name !== currentUser.name) {
                    const option = document.createElement('option');
                    option.value = staff.name;
                    option.textContent = staff.name;
                    staffSelect.appendChild(option);
                }
            });
        }
        
        // Submit shift swap request
        document.getElementById('submitRequestBtn').addEventListener('click', function() {
            const shiftVal = document.getElementById('shiftSelect').value;
            const staffVal = document.getElementById('staffSelect').value;
            const reason = document.getElementById('reasonInput').value;
            
            if (!shiftVal || !staffVal) {
                showNotification('Please select both a shift and a staff member', true);
                return;
            }
            
            const [weekIdx, role, day] = shiftVal.split('_');
            const week = allWeeks[weekIdx];
            
            // Create request
            const request = {
                id: Date.now(),
                requester: currentUser.name,
                recipient: staffVal,
                weekIndex: parseInt(weekIdx),
                role: role,
                day: day,
                reason: reason || "No reason provided",
                status: 'pending',
                created: new Date().toISOString()
            };
            
            shiftSwapRequests.push(request);
            saveLocal();
            showNotification(`Swap request sent to ${staffVal}`);
            
            // Reset form
            document.getElementById('shiftSelect').value = '';
            document.getElementById('staffSelect').value = '';
            document.getElementById('reasonInput').value = '';
        });
        
        // Render staff list
        function renderStaffList() {
            const container = document.getElementById('staffBody');
            container.innerHTML = '';
            
            staffList.forEach(staff => {
                if (staff.role === 'manager') return;
                
                const row = document.createElement('div');
                row.className = 'roster-row';
                
                // Calculate stats for staff
                const shifts = calculateStaffShifts(staff.name);
                
                row.innerHTML = `
                    <div class="role-cell">
                        <div class="user-avatar" style="display:inline-flex; margin-right:10px;">${staff.name.charAt(0)}</div>
                        ${staff.name}
                    </div>
                    <div class="hours-cell">${shifts.role || 'HCA'}</div>
                    <div class="shift-cell">${staff.contact || 'N/A'}</div>
                    <div class="shift-cell">${staff.startDate}</div>
                    <div class="shift-cell">
                        <span class="request-status status-approved">Active</span>
                    </div>
                    <div class="shift-cell">${shifts.weekShifts} shifts (${shifts.weekHours} hrs)</div>
                    <div class="shift-cell">${shifts.totalHours} hrs</div>
                    <div class="shift-cell">
                        <button class="action-btn" style="background:#4361ee; color:white; padding:8px 12px;">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                    </div>
                `;
                
                container.appendChild(row);
            });
        }
        
        // Calculate staff shifts and hours
        function calculateStaffShifts(staffName) {
            let weekShifts = 0;
            let weekHours = 0;
            let totalHours = 0;
            let mainRole = '';
            
            // Calculate for current week
            const currentWeek = allWeeks[currentWeekIdx];
            currentWeek.data.forEach(row => {
                days.forEach(day => {
                    if (row[day] === staffName) {
                        weekShifts++;
                        
                        // Extract hours - simplified calculation
                        const hoursMatch = row.hours.match(/(\d+)\s*[a|p]m\s*-\s*(\d+)/i);
                        if (hoursMatch) {
                            const start = parseInt(hoursMatch[1]);
                            const end = parseInt(hoursMatch[2]);
                            let duration = Math.abs(end - start);
                            if (duration > 5) duration -= 0.5; // Deduct break
                            weekHours += duration;
                        }
                        
                        if (!mainRole) mainRole = row.role;
                    }
                });
            });
            
            // Calculate total hours (simplified)
            totalHours = weekHours * 4; // Approximate monthly hours
            
            return {
                role: mainRole,
                weekShifts: weekShifts,
                weekHours: weekHours.toFixed(1),
                totalHours: totalHours.toFixed(1)
            };
        }
        
        // Render reports
        function renderReports() {
            const container = document.getElementById('reportBody');
            container.innerHTML = '';
            
            // Get top 10 staff by shifts
            const staffStats = staffList
                .filter(staff => staff.role === 'staff')
                .map(staff => {
                    const stats = calculateStaffShifts(staff.name);
                    return {
                        name: staff.name,
                        ...stats
                    };
                })
                .sort((a, b) => b.weekShifts - a.weekShifts)
                .slice(0, 10);
            
            // Render report rows
            staffStats.forEach(staff => {
                const row = document.createElement('div');
                row.className = 'roster-row';
                
                row.innerHTML = `
                    <div class="role-cell">${staff.name}</div>
                    <div class="hours-cell">${staff.weekShifts}</div>
                    <div class="shift-cell">${staff.weekHours}</div>
                    <div class="shift-cell">${Math.floor(staff.weekShifts * 0.3)}</div>
                    <div class="shift-cell">${Math.floor(staff.weekShifts * 0.4)}</div>
                    <div class="shift-cell">${Math.floor(staff.weekShifts * 0.2)}</div>
                    <div class="shift-cell">${Math.floor(staff.weekShifts * 0.1)}</div>
                    <div class="shift-cell">${Math.floor(staff.weekShifts * 0.1)}</div>
                    <div class="shift-cell">98%</div>
                `;
                
                container.appendChild(row);
            });
        }
        
        // Update stats
        function updateStats() {
            const week = allWeeks[currentWeekIdx];
            let totalShifts = 0;
            let totalHours = 0;
            
            week.data.forEach(row => {
                if (row.role === "Planned Leave") return;
                
                days.forEach(day => {
                    if (row[day]) totalShifts++;
                });
            });
            
            // Simplified calculation
            totalHours = totalShifts * 7.5;
            
            document.getElementById('totalShifts').textContent = `${totalShifts} Shifts`;
            document.getElementById('totalHours').textContent = `${totalHours} Hours`;
            document.getElementById('totalStaff').textContent = `${staffList.filter(s => s.role === 'staff').length} Staff`;
            document.getElementById('pendingRequests').textContent = `${shiftSwapRequests.filter(r => r.status === 'pending').length} Requests`;
        }
        
        // Save to localStorage
        function saveLocal() {
            localStorage.setItem('roster-allweeks', JSON.stringify(allWeeks));
            localStorage.setItem('staff-list', JSON.stringify(staffList));
            localStorage.setItem('swap-requests', JSON.stringify(shiftSwapRequests));
        }
        
        // Load from localStorage
        function loadLocal() {
            const saved = localStorage.getItem('roster-allweeks');
            if (saved) {
                try {
                    const loaded = JSON.parse(saved);
                    loaded.forEach((week, i) => {
                        if (allWeeks[i]) {
                            allWeeks[i] = week;
                        }
                    });
                } catch(e) {
                    console.error('Error loading roster data', e);
                }
            }
            
            const savedStaff = localStorage.getItem('staff-list');
            if (savedStaff) {
                try {
                    staffList = JSON.parse(savedStaff);
                } catch(e) {
                    console.error('Error loading staff data', e);
                }
            }
            
            const savedRequests = localStorage.getItem('swap-requests');
            if (savedRequests) {
                try {
                    shiftSwapRequests = JSON.parse(savedRequests);
                } catch(e) {
                    console.error('Error loading requests data', e);
                }
            }
        }
        
        // Reset roster
        document.getElementById('resetBtn').addEventListener('click', function() {
            if (confirm('Reset all changes to default?')) {
                localStorage.clear();
                location.reload();
            }
        });
        
        // Print roster
        document.getElementById('printBtn').addEventListener('click', function() {
            window.print();
        });
        
        // Save roster
        document.getElementById('saveBtn').addEventListener('click', function() {
            saveLocal();
            showNotification('All changes saved successfully');
        });
        
        // Export report
        document.getElementById('exportBtn').addEventListener('click', function() {
            showNotification('Report exported successfully');
        });
        
        // Add staff
        document.getElementById('addStaffBtn').addEventListener('click', function() {
            const name = prompt("Enter staff member's full name:");
            if (name) {
                // Generate username and password
                const username = name.toLowerCase().replace(/\s+/g, '');
                const password = Math.floor(100000 + Math.random() * 900000).toString();
                
                // Add to staff list
                staffList.push({
                    name: name,
                    username: username,
                    password: password,
                    role: 'staff',
                    contact: '',
                    startDate: new Date().toISOString().split('T')[0]
                });
                
                saveLocal();
                renderStaffList();
                showNotification(`${name} added to staff with password: ${password}`);
            }
        });
        
        // Show notification
        function showNotification(message, isError = false) {
            const notification = document.getElementById('notification');
            const title = notification.querySelector('.notification-title');
            const text = notification.querySelector('.notification-text');
            const icon = notification.querySelector('.notification-icon');
            
            text.textContent = message;
            
            if (isError) {
                notification.className = 'notification error show';
                icon.className = 'notification-icon icon-error';
                icon.innerHTML = '<i class="fas fa-exclamation"></i>';
                title.textContent = 'Error';
            } else {
                notification.className = 'notification show';
                icon.className = 'notification-icon icon-success';
                icon.innerHTML = '<i class="fas fa-check"></i>';
                title.textContent = 'Success';
            }
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        // Navigation switching
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Update active state
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                this.classList.add('active');
                
                // Show corresponding content section
                const target = this.getAttribute('data-target');
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(target).classList.add('active');
            });
        });
        
        // Week selector change
        document.getElementById('weekSelector').addEventListener('change', function() {
            currentWeekIdx = this.selectedIndex;
            renderRoster(currentWeekIdx);
        });
        
        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            // Load any saved data
            loadLocal();
            
            // Populate week selector
            const weekSelector = document.getElementById('weekSelector');
            weekSelector.innerHTML = '';
            allWeeks.forEach((week, i) => {
                const option = document.createElement('option');
                option.textContent = week.weekName;
                weekSelector.appendChild(option);
            });
            
            // Prefill login with test account
            document.getElementById('username').value = 'ilovenz@outlook.co.nz';
            document.getElementById('password').value = '123456';
        });
