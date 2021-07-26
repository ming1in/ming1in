import mixpanel from 'mixpanel-browser';
import { MixpanelEvent } from '../types/enums/MixPanel';
import { TimelineType } from '../types/enums/Timeline';

const MIXPANEL_PROJECT_TOKEN = '32abccaaa84db35604e57d0f34ce50d8';

mixpanel.init(MIXPANEL_PROJECT_TOKEN);

const isProdEnv = process.env.NODE_ENV === 'production';

interface MixpanelEventProps {
  event: MixpanelEvent;
  props: {
    filter?: TimelineType | string;
    route?: string;
  };
}

console.log(isProdEnv);

export default function useMixpanel(): { track(event: MixpanelEventProps): void } {
  return {
    track: ({ event, props }: MixpanelEventProps) => isProdEnv && mixpanel.track(event, props)
  };
}
