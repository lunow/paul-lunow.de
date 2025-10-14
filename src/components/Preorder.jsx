import { Button } from '@/components/Button'

export function Preorder({ learnMore, translations }) {
  return (
    <div>
      <div className="mt-8 flex gap-4">
        <Button href="https://amzn.eu/d/3YV37dm" target="_blank" color="blue">
          {translations.amazonButton}
        </Button>
        {learnMore !== 'false' && (
          <Button href="#introduction" variant="outline" color="blue">
            {translations.learnMoreButton}
          </Button>
        )}
      </div>
      <p className="mt-8 text-xs text-slate-500">
        {translations.disclaimer}
      </p>
    </div>
  )
}
