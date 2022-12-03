import { Cta } from "./molecula/CTA";

export default function Preview({entry, getAsset}) {
  const data = entry.getIn(['data']).toJS()
  return (
    <div>
      {data.sections?.map((section, index) => (
        <div key={index}>
          {section.type === 'CTA' && <Cta {...section} />}
        </div>
      ))}
    </div>
  )
}

