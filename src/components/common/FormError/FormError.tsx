const FormError = ({ message }: {message: string}) => {
  return <small className="text-sm d-block text-warning mt-1">{message}</small>
}

export default FormError