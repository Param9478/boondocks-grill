const GoogleMap = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.723851680997!2d-116.49684896382675!3d55.43260947986274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539827c5003e33bb%3A0xe54be10bdc05f591!2sThe%20Boondocks%20Grill!5e0!3m2!1sen!2sca!4v1701825735198!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
