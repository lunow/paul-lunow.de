import { Button } from '@/components/Button'

export function Preorder({ learnMore, translations }) {
  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="https://amzn.eu/d/3YV37dm" target="_blank" color="blue">
          {translations.amazonButton}
        </Button>
        <Button
          href="https://www.amazon.com/Audible-Riaru/dp/B0GGDZ9DL4"
          target="_blank"
          variant="outline"
          color="blue"
        >
          {translations.audibleButton}
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
