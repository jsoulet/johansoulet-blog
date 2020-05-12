import React, { FC } from 'react'
import tw from 'twin.macro'

const inputStyle = tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`

const Input: FC<{
  id: string
  label?: string
  placeholder?: string
  type?: string
  error?: string
  tip?: string
  required?: boolean
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}> = ({ id, label, value, onChange, placeholder, type = 'text', error, tip, required = false }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} css={[tw`block uppercase text-xs font-bold mb-2`]}>
          {label}
        </label>
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          css={[inputStyle, tw`resize-y h-48`]}
          onChange={onChange}
          value={value}
        />
      )}
      {type !== 'textarea' && (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          css={[inputStyle, error && tw`border-red-500`]}
        />
      )}
      {tip && <p css={[tw`text-gray-600 text-xs italic`]}>{tip}</p>}
      {error && <p css={[tw`text-red-500 text-xs italic`]}>{error}</p>}
    </div>
  )
}

export default Input
