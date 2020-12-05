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


var $savedEntries = localStorage.getItem('user-entries');
data.entries.push(JSON.parse($savedEntries));

var $savedProfiles = localStorage.getItem('user-profile');
data.profile = JSON.parse($savedProfiles);

window.addEventListener('beforeunload', function (e) {
  var $profiles = JSON.stringify(data.profile);
  localStorage.setItem('user-profile', $profiles);

});

window.addEventListener('beforeunload',function(e){
  var $jEntries = JSON.stringify(data.entries);
  localStorage.setItem('user-entries',$jEntries);
})
