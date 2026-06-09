import type { DraftItem } from '@/data/content';

function getLetter(index: number) {
  return String.fromCharCode(97 + index);
}

function getRoman(index: number) {
  return ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'][index] ?? `${index + 1}`;
}

export function DraftCurriculumList({ items }: { items: DraftItem[] }) {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      {items.map((item, index) => (
        <DraftItemNode key={item.label} item={item} number={index + 1} depth={0} />
      ))}
    </div>
  );
}

function DraftItemNode({
  item,
  number,
  depth,
  letterIndex,
  romanIndex,
}: {
  item: DraftItem;
  number?: number;
  depth: number;
  letterIndex?: number;
  romanIndex?: number;
}) {
  let prefix = '';
  if (depth === 0 && number) prefix = `${number})`;
  if (depth === 1 && letterIndex !== undefined) prefix = `${getLetter(letterIndex)})`;
  if (depth === 2 && romanIndex !== undefined) prefix = `${getRoman(romanIndex)})`;

  return (
    <div>
      <p className="font-medium text-gray-900">
        {prefix && <span>{prefix} </span>}
        {item.label}
      </p>
      {item.children && (
        <div className={`mt-1 space-y-1 ${depth === 0 ? 'ml-6 sm:ml-10' : 'ml-6 sm:ml-8'}`}>
          {item.children.map((child, i) => (
            <DraftItemNode
              key={child.label}
              item={child}
              depth={depth + 1}
              letterIndex={depth === 0 ? i : letterIndex}
              romanIndex={depth === 1 ? i : romanIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
