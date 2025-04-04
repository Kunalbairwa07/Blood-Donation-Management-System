const donors = [
    { name: 'John Doe', bloodGroup: 'O+', contact: '123-456-7890' },
    { name: 'Jane Smith', bloodGroup: 'A-', contact: '987-654-3210' }
  ];
  
  const donorList = document.getElementById('donor-list');
  
  donors.forEach(donor => {
    const row = `<tr>
      <td>${donor.name}</td>
      <td>${donor.bloodGroup}</td>
      <td>${donor.contact}</td>
      <td><button onclick="alert('Editing ${donor.name}')">Edit</button> <button onclick="alert('Deleting ${donor.name}')">Delete</button></td>
    </tr>`;
    donorList.innerHTML += row;
  });