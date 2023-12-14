import { Tab } from "@headlessui/react";

export default function Nav() {
  return (
    <Tab.Group>
      <Tab.List className="tabs tabs-lifted tabs-lg">
        <Tab className="tab tab-active">Main</Tab>
        <Tab className="tab">Tab 2</Tab>
        <Tab className="tab">Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}