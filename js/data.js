/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};




  var $savedProfiles = localStorage.getItem('data');
  data = JSON.parse($savedProfiles);


window.addEventListener('beforeunload', function (e) {
  var $data = JSON.stringify(data);
  localStorage.setItem('data', $data);
});
