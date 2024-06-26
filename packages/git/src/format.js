import chalk from 'chalk';
 * @param git_context {{ fs, dir, gitdir, cache }} as taken by most isomorphic-git methods.
export const format_oid = async (git_context, oid, { short_hashes = false } = {}) => {
    return short_hashes ? shorten_hash(git_context, oid) : oid;
 * @param git_context {{ fs, dir, gitdir, cache }} as taken by most isomorphic-git methods.
export const format_commit = async (git_context, commit, oid, options = {}) => {
    const indent = (text) => text.split('\n').map(it => `    ${it}`).join('\n');
            return `${chalk.yellow(await format_oid(git_context, oid, options))} ${title_line()}`;
            s += chalk.yellow(`commit ${await format_oid(git_context, oid, options)}\n`);
            s += indent(title_line());
            s += chalk.yellow(`commit ${await format_oid(git_context, oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${await format_oid(git_context, oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${await format_oid(git_context, oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${oid}\n`);
            s += indent(commit.message);
    s += chalk.yellow(`tree ${oid}\n`);
    s += chalk.yellow(`tag ${tag.tag}\n`);
 * @param git_context {{ fs, dir, gitdir, cache }} as taken by most isomorphic-git methods.
export const format_diffs = async (git_context, diffs, options) => {
            const short_a_oid = await shorten_hash(git_context, a.oid);
            const short_b_oid = await shorten_hash(git_context, b.oid);

            s += `:${a.mode} ${b.mode} ${short_a_oid} ${short_b_oid} `;
            const short_a_oid = await shorten_hash(git_context, a.oid);
            const short_b_oid = await shorten_hash(git_context, b.oid);

            s += chalk.bold(`diff --git ${first_line_a_path} ${b_path}\n`);
                s += chalk.bold(`index ${short_a_oid}..${short_b_oid} ${a.mode}\n`);
                    s += chalk.bold(`new file mode ${b.mode}\n`);
                    s += chalk.bold(`old mode ${a.mode}\n`);
                    s += chalk.bold(`new mode ${b.mode}\n`);
                s += chalk.bold(`index ${short_a_oid}..${short_b_oid}\n`);
            s += chalk.bold(`--- ${a_path}\n`);
            s += chalk.bold(`+++ ${b_path}\n`);
                s += chalk.blueBright(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`);
                            s += chalk.greenBright(`${line}\n`);
                            s += chalk.redBright(`${line}\n`);