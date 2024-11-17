import { Button } from '@/components/Button'

export function Preorder({ learnMore }) {
  return (
    <div>
      <div className="mt-8 flex gap-4">
        <Button href="https://amzn.eu/d/3YV37dm" target="_blank" color="blue">
          Vorbestellen auf Amazon*
        </Button>
        {learnMore !== 'false' && (
          <Button href="#introduction" variant="outline" color="blue">
            Mehr erfahren
          </Button>
        )}
      </div>
      <p className="mt-8 text-xs text-slate-500">
        * oder im lokalen Buchandel um die Ecke!
      </p>
    </div>
  )
}
