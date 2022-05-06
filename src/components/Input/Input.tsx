import './Input.css'

interface IInputProps {
  onChange(val: string): void
}

function Input({ onChange }: IInputProps) {
  return (
    <div className="input">
      <input
        type="text"
        defaultValue=""
        placeholder="type the repo name here..."
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default Input
