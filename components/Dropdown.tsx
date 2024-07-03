import * as DropdownMenu from 'zeego/dropdown-menu';
import RoundButton from './RoundButton';

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundButton
          icon={'ellipsis-horizontal'}
          text={'More'}
          onPress={() => {}}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        side={'bottom'}
        align={'center'}
        sideOffset={0}
        alignOffset={0}
        collisionPadding={0}
        avoidCollisions={true}
        loop={false}
      >
        <DropdownMenu.Item key='statement'>
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'list.bullet.rectangle.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>

        <DropdownMenu.Item key='converter'>
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'coloncurrencysign.arrow.circlepath',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>

        <DropdownMenu.Item key='background'>
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'photo.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key='addNewAccount'>
          <DropdownMenu.ItemTitle>Add new account</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'plus.rectangle.on.folder.fill',
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
