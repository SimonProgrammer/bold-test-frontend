function formatDate(date: Date){
    return new Intl.DateTimeFormat("es-ES", {
        dateStyle: "medium",
        timeStyle: "medium"
      }).format(new Date(date));
}

export default formatDate;