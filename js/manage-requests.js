const requests = [
    { name: 'Alice Brown', bloodGroup: 'B+', contact: '111-222-3333', status: 'Pending' },
    { name: 'Charlie Green', bloodGroup: 'AB-', contact: '444-555-6666', status: 'Approved' }
  ];
  
  const requestList = document.getElementById('request-list');
  
  requests.forEach(request => {
    const row = `<tr>
      <td>${request.name}</td>
      <td>${request.bloodGroup}</td>
      <td>${request.contact}</td>
      <td>${request.status}</td>
      <td><button onclick="alert('Approving ${request.name}')">Approve</button> <button onclick="alert('Rejecting ${request.name}')">Reject</button></td>
    </tr>`;
    requestList.innerHTML += row;
  });